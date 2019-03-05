var arr = [ "concat(", "/descendant::p", ", ", "/descendant::img", ", ", "/following::span" ];


arr[arr.length-3] += arr.pop();
arr.pop();
