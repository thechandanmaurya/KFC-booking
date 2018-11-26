function Summary()
{
    var txtName = document.getElementById("txtName");
    var optBurger= document.getElementById("optBurger");
    var optRoller= document.getElementById("optRoller");
    var optKrusher= document.getElementById("optKrusher");
    var optFries= document.getElementById("optFries");
    var summary = document.getElementById("summary");
    var mcost;
    var acost;
    var mname;
    if(optBurger.checked)
    {
        mcost=120;
        mname=optBurger.value;
    }
    if(optRoller.checked)
    {
        mcost=100;
        mname=optRoller.value;
    }
    if(optKrusher.checked)
    {
        acost=80;
        mcost=mcost + acost;
    }
    if(optFries.checked)
    {
        acost=60;
        mcost=mcost + acost;
    }
    summary.innerHTML="Hello ! " + txtName.value + "<br>" + "Total Bill amount for your meal " +  mname + " is " + "&#8377;" +  mcost;
}