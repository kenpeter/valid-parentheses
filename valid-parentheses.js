/**
 * @param {string} s
 * @return {boolean}
 */
var isValid = function(s) {
    let strArr = s.split('');
    let stackArr = [];
    for(let i=0; i<strArr.length; i++) {
        let bol = strArr[i];
        let popBol;
        
        if(bol == '{') {
            stackArr.push('}');
        } else if(bol == '[') {
            stackArr.push(']');
        } else if(bol == '(') {
            stackArr.push(')');
            
        } else if(bol == '}' || bol == ']' || bol == ')') {
            // all pop
            
            // want pop, but nothing in stack to pop
            if(stackArr.length == 0) {
                return false;
            } else {
                // mirror effect not match
                popBol = stackArr.pop();
                if(popBol != bol) {
                    return false;
                } else {
                    continue;
                }
            }        
        }
        
    } // end loop
    
    // loop array end, stack still has
    if(stackArr.length > 0) {
        return false;
    } else {
        return true;
    }
    
};

let input = '(){}[()]';
let out = isValid(input);
console.log(out);
