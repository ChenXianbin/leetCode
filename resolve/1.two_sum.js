/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */
var twoSum = function(nums, target) {
    for(var i=0,l=nums.length;i<l;i++){
        var target_num=nums.indexOf(target-nums[i],i+1);
        if(target_num>0&&(target_num!=i)){
            return [i,target_num];
        }
    }
};
