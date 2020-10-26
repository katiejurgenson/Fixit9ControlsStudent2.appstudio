rdoDescribe.onchange=function(){
  lblDescribe.value = `I agree you are a very ${$("input[name=rdoDescribe]:checked").prop("value")} person!`
}

btnNext3.onclick=function(){
  ChangeForm(favExercises)
}