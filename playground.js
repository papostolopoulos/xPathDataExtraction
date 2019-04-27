function transform(data){
  data = data.replace(/(,\s*)?(!\s(Mon|Tue|Wed|Thu|Fri|Sat|Sun).*Find\s*out\s*more|get\s*the\s*details|Check\s*it\s*out|Exclusions\s*Terms\s*and\s*Conditions|Exclusions\s*and\s*details|Ends\s*(soon|tonight)|Learn\s*more|limit\s*1\s*per\s*transaction|Limited\s*quantities;|Shop\s*(the\s*gift\s*guide|now|all)|ends\s*(Monday|Tuesday|Wednesday|Thursday|Friday|Saturday|Sunday|tomorrow|today|tonight)|Find\s*Out\s*More|Exclusions|Now-(Mon|Tue|Wed|Thu|Fri|Sat|Sun),?|(January|February|March|April|May|June|July|August|September|October|November|December)\s*\d{1,2}|(Specials\s*end|ends)\s*\d{1,2}\/\d{1,2}|Take\s*The\s*Mattress\s*Quiz|Worrynomore|while\s*supplies\s*last)/ig, "");

  return data.trim();
}
