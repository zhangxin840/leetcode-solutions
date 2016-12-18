var binSearchPosition = function (nums, target, low, high) {
  var mid = (low + high) >> 1;

  if (target === nums[mid]) {
    return mid;
  }

  if (low === high) {
    return (target < nums[mid] ? low : high + 1);
  }

  if (target < nums[mid]) {
    return binSearchPosition(nums, target, low, mid);
  } else {
    return binSearchPosition(nums, target, mid + 1, high);
  }
};
