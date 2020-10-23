function TwoSum (nums, target) {
        for (let i = 0 ; i < nums.length-1 ; i++) {
            let low = nums[i];
            for (let j = i+1; j < nums.length ; j++) {
                let sum = low + nums[j];
                if (sum == target) {
                    return [i,j];
                }
            }
        }
        return [];
};

function main () {
        let     target = 9;
        let     arr = [2, 2, 7, 15];
        // let     pairs = TwoSum (arr, target);
        // console.log (pairs);
        
        let     map = new Map ();
        
        for (let i=0 ; i<arr.length ; i++) {
                
                if (map.get (target-arr[i])) {
                        // return [map.get (target-arr[i]), i];
                        console.log ([map.get (target-arr[i]), i]);
                        return;
                }
                map.set (arr[i],i);
        }
        // return [];
        console.log ([])
        return;

}

main ()