/**
 * @param {number[]} nums1
 * @param {number[]} nums2
 * @return {number}
 */
var findMedianSortedArrays = function(nums1, nums2) {
    let nums1_len = nums1.length;
    let nums2_len = nums2.length;
    let total_len = nums1_len + nums2_len;
    let dan = total_len % 2;
    let mid_index = ( dan == 0 ? total_len/2:total_len/2-0.5 );
    let cnt = 0,target_arr = [];
    while(cnt<=mid_index){
        if(!isNaN(nums1[0]) && !isNaN(nums2[0])){
            nums1[0]<nums2[0] ? target_arr.push(nums1.shift()) : target_arr.push(nums2.shift()) ;
        }else if(!isNaN(nums1[0])){
              target_arr.push(nums1.shift())   
        }else{
            target_arr.push(nums2.shift())
        }    
        cnt++;
    }
    let target_len = target_arr.length;
    return (dan % 2 == 0 ? (target_arr[target_len-1]+target_arr[target_len-2])/2  :target_arr[target_len-1] );
    
};
