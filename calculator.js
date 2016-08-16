        var Fcalc = document.calc;
        var Currents = 0;
        var FlagNewNum = false;
        var PendingOp = "";
        
        function numPressed(n){
            if(FlagNewNum){
                Fcalc.ReadOut.value = n;
                FlagNewNum = false;
            }
            else {
                if(Fcalc.ReadOut.value == "0") Fcalc.ReadOut.value = n;
                else Fcalc.ReadOut.value += n;
            }
        }
        
        function operation(op){
            var readOut = Fcalc.ReadOut.value;
            if(FlagNewNum && PendingOp != "="){
                Fcalc.ReadOut.value = Currents;
            }
            else{
                FlagNewNum = true;
                switch(PendingOp){
                    case '+': Currents += parseFloat(readOut); break;
                    case '-': Currents -= parseFloat(readOut); break;
                    case '/': Currents /= parseFloat(readOut); break;
                    case '*': Currents *= parseFloat(readOut); break;
                    default: Currents = parseFloat(readOut); break;
                }
                Fcalc.ReadOut.value = Currents;
                PendingOp = op;
            }
        }
        
        function decimal() {//add a dot to the number
            var curReadOut = Fcalc.ReadOut.value;
            if(FlagNewNum){
                curReadOut = "0.";
                FlagNewNum = false;
            }
            else{
                if(curReadOut.indexOf(".") == -1) curReadOut += ".";
            }
            Fcalc.ReadOut.value = curReadOut;
        }
        
        function clearEntry(){
            Fcalc.ReadOut.value = "0";
            FlagNewNum = true;
        }
        
        function clear(){
            Currents = 0;
            PendingOp = "";
            clearEntry();
        }
    
        function neg(){ // change sign
            Fcalc.ReadOut.value = parseFloat(Fcalc.ReadOut.value) * -1;
        }
        
        function percent(){
            Fcalc.ReadOut.value = (parseFloat(Fcalc.ReadOut.value) / 100) * parseFloat(Currents); 
        }

	function sqrt(){
	    if(parseFloat(Fcalc.ReadOut.value) <= 0) Fcalc.ReadOut.value = 0;
	    else Fcalc.ReadOut.value = Math.sqrt(parseFloat(Fcalc.ReadOut.value)); 
        }
	
