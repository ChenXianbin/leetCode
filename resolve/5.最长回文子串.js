/**
 * @param {string} s
 * @return {string}
 */
var longestPalindrome = function(s) {
    let arr = s.split('');
    let distance = 0,max_len = 0,max_i = 0,max_distance = 0,
        double_distance = -1,max_double_len = 0,max_double_distance = -1,max_double_i = -1;
    for(let i = 0,l = arr.length;i<l;i++){
        while(arr[i-distance-1]&& arr[i+distance+1]&&arr[i-distance-1] == arr[i+distance+1] ){
              distance++;
        }
        if(distance*2+1>max_len){
            max_len = distance*2+1;
            max_distance = distance;
            max_i = i;
        }
        
        if(arr[i-1] == arr[i]){
            double_distance = 0;
            while(arr[i-double_distance-2]&& arr[i+double_distance+1]&&arr[i-double_distance-2] == arr[i+double_distance+1]){
                  double_distance++;
            }
            if(double_distance*2+2>max_double_len){
                max_double_len = double_distance*2+2;
                max_double_distance = double_distance;
                max_double_i = i;
            }
        }
        distance = 0;
        double_distance = -1;
    }
    if(max_double_len>max_len){
        return arr.slice(max_double_i-max_double_distance-1,max_double_i-max_double_distance-1+max_double_len).join('');
    }else{
        return arr.slice(max_i-max_distance,max_i-max_distance+max_len).join('');
    }
};
