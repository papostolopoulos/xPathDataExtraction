



function transform(data){
  var dataSplit = data.split("~~~");

  if(dataSplit[0].toLowerCase().indexOf("spring travel") !== -1){
    dataSplit[1] = dataSplit[1].slice(dataSplit[1].toLowerCase().indexOf("domestic sale terms"));
    return dataSplit[1]
      .match(/from\s*(?:January|February|March|April|May|June|July|August|September|October|November|December)\s*\d{1,2}\s*through\s*((?:January|February|March|April|May|June|July|August|September|October|November|December)\s*\d{1,2},?\s*\d{2,4}),?\s*11:59/i)[0]
    .replace(/from\s*(?:January|February|March|April|May|June|July|August|September|October|November|December)\s*\d{1,2}\s*through\s*((?:January|February|March|April|May|June|July|August|September|October|November|December)\s*\d{1,2},?\s*\d{2,4}),?\s*11:59/i, "$1");
  } 


  if(dataSplit[0].toLowerCase().indexOf("international break") !== -1){
    dataSplit[1] = dataSplit[1].slice(dataSplit[1].toLowerCase().indexOf("international sale terms"));
    return dataSplit[1]
      .match(/from\s*(?:January|February|March|April|May|June|July|August|September|October|November|December)\s*\d{1,2}\s*through\s*((?:January|February|March|April|May|June|July|August|September|October|November|December)\s*\d{1,2},?\s*\d{2,4}),?\s*11:59/i)[0]
    .replace(/from\s*(?:January|February|March|April|May|June|July|August|September|October|November|December)\s*\d{1,2}\s*through\s*((?:January|February|March|April|May|June|July|August|September|October|November|December)\s*\d{1,2},?\s*\d{2,4}),?\s*11:59/i, "$1");
  }


  if(/Up\s*to\s*\$\d*\s*off/.test(dataSplit[0])){
    dataSplit[1] = dataSplit[1].slice(dataSplit[1].toLowerCase().indexOf("southwest vacations® offer terms and conditions:"));
    return dataSplit[1]
    .match(/if\s*booked\s*(?:(?:\d{1,2}\/){2}\d{2,4})\s*–\s*((?:\d{1,2}\/){2}\d{2,4})\s*by\s*6:00/)[0]
    .replace(/if\s*booked\s*(?:(?:\d{1,2}\/){2}\d{2,4})\s*–\s*((?:\d{1,2}\/){2}\d{2,4})\s*by\s*6:00/,"$1");
  }




  return null;
}
