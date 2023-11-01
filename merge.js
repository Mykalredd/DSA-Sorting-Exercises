function merge(nums1, nums2) {
    let result = [];
    let i = 0;
    let j = 0;
  
    while (i < nums1.length && j < nums2.length) {
      if (nums1[i] < nums2[j]) {
        result.push(nums1[i]);
        i++;
    } else {
        result.push(nums2[j]);
        j++;
      }
    }
  
    // Add remaining elements from both arrays (if any)
    return result.concat(nums1.slice(i), nums2.slice(j));
  }
  
  function mergeSort(arr) {
    if (arr.length <= 1) {
      return arr; // Base case: array with 0 or 1 element is already sorted
    }
  
    // Split the array into two halves
    const middle = Math.floor(arr.length / 2);
    const left = arr.slice(0, middle);
    const right = arr.slice(middle);
  
    // Recursively merge and sort both halves
    return merge(mergeSort(left), mergeSort(right));
  }
  
  module.exports = { merge, mergeSort };
  