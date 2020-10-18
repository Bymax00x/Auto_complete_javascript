

var targetInput = document.getElementById('country'),
    results = document.getElementById("autocomplete-results"),
    countryList = ['Australia', 'USA', 'China', 'Russia', 'korea','Nepal','kenya'];

    var matches=[];

    targetInput.focus();

    targetInput.addEventListener("keyup", function(event){
        

        results.innerHTML="";
        toggleResults("hide");

        if (this.value.length>0){
            matches = getMatches(this.value);

            if (matches.length>0){
                displayMatches(matches);
            }
        }

    });


    function toggleResults(action){
        if(action =="show"){
            results.classList.add("visible");
        }
        else if(action == "hide" ){
            results.classList.remove ("visible");
        }
    }

    function getMatches( inputText){
        var matchList=[];

        for( var i=0; i< countryList.length; i++){
            if (countryList[i].toLowerCase().indexOf(inputText.toLowerCase())!=-1){
                matchList.push(countryList[i]);
            }
        }
        return matchList;
    }

    function displayMatches( matchList){
        var j=0;

        while (j< matchList.length){
            results.innerHTML +='<li class="result">'+ matchList[j] + '</li>';
            j++;
        }

        toggleResults("show");
    }