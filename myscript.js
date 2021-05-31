function GetSelectedValue(){
				var e = document.getElementById("currency");
				var result = e.options[e.selectedIndex].value;

				document.getElementById("result").innerHTML = result;
                document.getElementById("result1").innerHTML = result;
                
			}
        
            function GetSelectedValue1(){
				var e = document.getElementById("convertedCurrency");
				var result = e.options[e.selectedIndex].value;

				document.getElementById("result2").innerHTML = result;
                document.getElementById("result3").innerHTML = result;
			}

			 function tipCalcy() {
                let amount = document.getElementById('totalBill').value;
                let tipPercentage = document.getElementById('percentage').value;
                let person = document.getElementById('numberOfPerson').value;
                let tipPerPerson = ((tipPercentage/100)*amount)/person;
                let totalAmountPerPerson = (amount/person)+tipPerPerson; 
                
                document.getElementById("tipPerPerson").innerHTML = tipPerPerson;
                document.getElementById("totalPerPerson").innerHTML = totalAmountPerPerson ;
                 
                return tipPerPerson;
                 
            }
            
            function tipCalcy1() {
                let amount = document.getElementById('totalBill').value;
                let tipPercentage = document.getElementById('percentage').value;
                let person = document.getElementById('numberOfPerson').value;
                let tipPerPerson = ((tipPercentage/100)*amount)/person;
                let totalAmountPerPerson = (amount/person)+tipPerPerson;  
                return totalAmountPerPerson;
                 
            }
            function convertCurrency() {
                
                
                calculate();
                
            
                
                
                function calculate(){
                    const amountOne = tipCalcy();
                    const currencyOne = document.getElementById("currency").value;
                    const currencyTwo = document.getElementById("convertedCurrency").value;
                    const currOne = currencyOne.value;
                    const currTwo = currencyTwo.value;
                    const amountTwo = tipCalcy1();   
    
                    fetch('http://api.exchangeratesapi.io/latest?access_key=5efb8b5dc0b419b57dcac7d1e017bb19&symbols='+currencyOne+","+currencyTwo)
                    .then(res =>res.json())
                    .then(data =>{
                        console.log(data)
                        const rate = data.rates[currencyOne];
                        const rate1 = data.rates[currencyTwo];
                        const newRate = rate1/rate; 
                        
                        const finalvalue = (amountOne*newRate).toFixed(2);
                        const finalvalue2 = (amountTwo*newRate).toFixed(2);
                        
                        //alert(finalvalue);
                        //alert(finalvalue2);
                        document.getElementById("convertedtipPerPerson").innerHTML = finalvalue;
                        document.getElementById("convertedtotalPerPerson").innerHTML = finalvalue2 ;
                
                    })
                }
            }
