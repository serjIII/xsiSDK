function SearchStemmer(config) {
    var step2list = new Array();
    step2list["ational"] = "ate";
    step2list["tional"] = "tion";
    step2list["enci"] = "ence";
    step2list["anci"] = "ance";
    step2list["izer"] = "ize";
    step2list["bli"] = "ble";
    step2list["alli"] = "al";
    step2list["entli"] = "ent";
    step2list["eli"] = "e";
    step2list["ousli"] = "ous";
    step2list["ization"] = "ize";
    step2list["ation"] = "ate";
    step2list["ator"] = "ate";
    step2list["alism"] = "al";
    step2list["iveness"] = "ive";
    step2list["fulness"] = "ful";
    step2list["ousness"] = "ous";
    step2list["aliti"] = "al";
    step2list["iviti"] = "ive";
    step2list["biliti"] = "ble";
    step2list["logi"] = "log";

    var step3list = new Array();
    step3list["icate"] = "ic";
    step3list["ative"] = "";
    step3list["alize"] = "al";
    step3list["iciti"] = "ic";
    step3list["ical"] = "ic";
    step3list["ful"] = "";
    step3list["ness"] = "";

    var c = "[^aeiou]";          // consonant
    var v = "[aeiouy]";          // vowel
    var C = c + "[^aeiouy]*";    // consonant sequence
    var V = v + "[aeiou]*";      // vowel sequence

    var mgr0 = "^(" + C + ")?" + V + C;               // [C]VC... is m>0
    var meq1 = "^(" + C + ")?" + V + C + "(" + V + ")?$";  // [C]VC[V] is m=1
    var mgr1 = "^(" + C + ")?" + V + C + V + C;       // [C]VCVC... is m>1
    var s_v = "^(" + C + ")?" + v;                   // vowel in stem

    function stemWord(w) {
        var stem;
        var suffix;
        var firstch;

        if (w.length < 3) {
            return w;
        }

        var re;
        var re2;
        var re3;
        var re4;

        firstch = w.substr(0, 1);
        if (firstch == "y") {
            w = firstch.toUpperCase() + w.substr(1);
        }

        // Step 1a
        re = /^(.+?)(ss|i)es$/;
        re2 = /^(.+?)([^s])s$/;

        if (re.test(w)) {
            w = w.replace(re, "$1$2");
        }
        else if (re2.test(w)) {
            w = w.replace(re2, "$1$2");
        }

        // Step 1b
        re = /^(.+?)eed$/;
        re2 = /^(.+?)(ed|ing)$/;
        if (re.test(w)) {
            var fp1 = re.exec(w);
            re = new RegExp(mgr0);
            if (re.test(fp1[1])) {
                re = /.$/;
                w = w.replace(re, "");
            }
        } else if (re2.test(w)) {
            var fp2 = re2.exec(w);
            stem = fp2[1];
            re2 = new RegExp(s_v);
            if (re2.test(stem)) {
                w = stem;
                re2 = /(at|bl|iz)$/;
                re3 = new RegExp("([^aeiouylsz])\\1$");
                re4 = new RegExp("^" + C + v + "[^aeiouwxy]$");
                if (re2.test(w)) {
                    w = w + "e";
                }
                else if (re3.test(w)) {
                    re = /.$/;
                    w = w.replace(re, "");
                }
                else if (re4.test(w)) {
                    w = w + "e";
                }
            }
        }

        // Step 1c
        re = /^(.+?)y$/;
        if (re.test(w)) {
            var fp3 = re.exec(w);
            stem = fp3[1];
            re = new RegExp(s_v);
            if (re.test(stem)) {
                w = stem + "i";
            }
        }

        // Step 2
        re = /^(.+?)(ational|tional|enci|anci|izer|bli|alli|entli|eli|ousli|ization|ation|ator|alism|iveness|fulness|ousness|aliti|iviti|biliti|logi)$/;
        if (re.test(w)) {
            var fp4 = re.exec(w);
            stem = fp4[1];
            suffix = fp4[2];
            re = new RegExp(mgr0);
            if (re.test(stem)) {
                w = stem + step2list[suffix];
            }
        }

        // Step 3
        re = /^(.+?)(icate|ative|alize|iciti|ical|ful|ness)$/;
        if (re.test(w)) {
            var fp5 = re.exec(w);
            stem = fp5[1];
            suffix = fp5[2];
            re = new RegExp(mgr0);
            if (re.test(stem)) {
                w = stem + step3list[suffix];
            }
        }

        // Step 4
        re = /^(.+?)(al|ance|ence|er|ic|able|ible|ant|ement|ment|ent|ou|ism|ate|iti|ous|ive|ize)$/;
        re2 = /^(.+?)(s|t)(ion)$/;
        if (re.test(w)) {
            var fp6 = re.exec(w);
            stem = fp6[1];
            re = new RegExp(mgr1);
            if (re.test(stem)) {
                w = stem;
            }
        } else if (re2.test(w)) {
            var fp7 = re2.exec(w);
            stem = fp7[1] + fp7[2];
            re2 = new RegExp(mgr1);
            if (re2.test(stem)) {
                w = stem;
            }
        }

        // Step 5
        re = /^(.+?)e$/;
        if (re.test(w)) {
            var fp8 = re.exec(w);
            stem = fp8[1];
            re = new RegExp(mgr1);
            re2 = new RegExp(meq1);
            re3 = new RegExp("^" + C + v + "[^aeiouwxy]$");
            if (re.test(stem) || (re2.test(stem) && !(re3.test(stem)))) {
                w = stem;
            }
        }

        re = /ll$/;
        re2 = new RegExp(mgr1);
        if (re.test(w) && re2.test(w)) {
            re = /.$/;
            w = w.replace(re, "");
        }

        // and turn initial Y back to y

        if (firstch == "y") {
            w = firstch.toLowerCase() + w.substr(1);
        }

        return w;

    }

    this.stem = function(words) {
        if (config && config.locale == 'en_US') {
            var resultWords = new Array();
            for (var i = 0; i < words.length; i++) {
                resultWords[resultWords.length] = stemWord(words[i]);
            }
            return resultWords;
        } else {
            return words;
        }
    }
}
