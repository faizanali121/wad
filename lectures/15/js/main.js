var person={
    name: "Faizan Ali",
    balance: 10,
    curr: "PKRS",
    iban: "L1F16BSCS0307"
};
function display()
{
    document.getElementById("title").innerText = person.name;
    document.getElementById("balance").innerText = person.balance;
    document.getElementById("currency").innerText = person.curr;
    document.getElementById("IBAN").innerText = person.iban;
}
display();

function deposit(e)
{
if(e.key == "Enter")
{
 var dep =parseInt( document.getElementById("deposit").value);
    document.getElementById("deposit").value="";
    document.getElementById("deposit-msg").innerText="";
if(!isNaN(dep))
{
    person.balance += dep;
    document.getElementById("balance").innerText = "";
    document.getElementById("balance").innerText = person.balance;

    document.getElementById("transaction-table").innerHTML +=
 '<tr>'
 +'<th align="left" valign="middle" scope="col">'+new Date()+'</th>'
 +'<th align="left" valign="middle" scope="col">'+"credit"+'</th>'
 +'<th align="left" valign="middle" scope="col">'+dep+'</th>'
 +'<th align="left" valign="middle" scope="col">'+person.balance+'</th>'
 +'</tr>';
}
else
{
    document.getElementById("deposit-msg").innerText="Enter Valid Value";
}
}
}

function withdraw(e)
{
    if(e.key == "Enter")
    {
        var dep =parseInt( document.getElementById("withdraw").value);
        document.getElementById("withdraw").value="";
        document.getElementById("withdraw-msg").innerText="";
        if(!isNaN(dep))
        {
            if(dep>person.balance)
            {
                document.getElementById("withdraw-msg").innerText="Not Enough Credit";
            }
            else
            {
            person.balance -= dep;
            document.getElementById("balance").innerText = "";
            document.getElementById("balance").innerText = person.balance;

                document.getElementById("transaction-table").innerHTML +=
                    '<tr>'
                    +'<th align="left" valign="middle" scope="col">'+new Date()+'</th>'
                    +'<th align="left" valign="middle" scope="col">'+"debit"+'</th>'
                    +'<th align="left" valign="middle" scope="col">'+dep+'</th>'
                    +'<th align="left" valign="middle" scope="col">'+person.balance+'</th>'
                    +'</tr>';
            }
        }
        else
        {
            document.getElementById("withdraw-msg").innerText="Enter Valid Value";
        }
    }
}
