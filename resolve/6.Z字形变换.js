/**
 * @param {string} s
 * @param {number} numRows
 * @return {string}
 */
var convert = function(s, numRows) {
    let arr = [],cnt = 0;
    while(cnt<numRows){
       arr.push([]);
       cnt++;
    }
    let pos_row = 0,pos_col = 0,switch_direction = false;
    let str_cnt = 0;
    while(str_cnt<s.length){
      arr[pos_row][pos_col] = s[str_cnt];
      if(pos_row == 0){
         switch_direction = false;
      }  
      if(pos_row == arr.length-1){
         switch_direction = true;
      }
      if(switch_direction){
           pos_row>0 && pos_row--;
           pos_col++;
      }else{
           pos_row++;
      }
    str_cnt++;
    }
    let return_cnt = 0;
    while(return_cnt<numRows){
      arr[return_cnt] = arr[return_cnt].join('');
      return_cnt++;
    }
    return arr.join('');
};
