function ValidSign (s) {
        let isValid = true;
        let stack = [];
        let mapper = {
          "{": "}",
          "[": "]",
          "(": ")",
        };
      
        for (let i in s) {
                let v = s[i];
                if (["(", "[", "{"].indexOf (v) > -1) {
                        stack.push (v);
                }
                else {
                        let peak = stack.pop ();
                        if (v !== mapper[peak]) {
                                return false;
                        }
                }
        }
      
        if (stack.length > 0) return false;
      
        return isValid;
}