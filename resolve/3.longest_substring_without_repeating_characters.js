/**
 * @param {string} s
 * @return {number}
 */
var lengthOfLongestSubstring = function(s) {
    var str_arr = s.split('');
    var start_point = 0,end_point = 0,max_length = 0,curr_length=0,unic_dict = {};
    while(str_arr[end_point]){
        if(unic_dict[str_arr[end_point]]){
            delete unic_dict[str_arr[start_point++]]
            curr_length--;
        }else{
            unic_dict[str_arr[end_point++]] = 1;
            curr_length++;
        }
        max_length = curr_length>max_length?curr_length:max_length;
    }
    return max_length;
};
