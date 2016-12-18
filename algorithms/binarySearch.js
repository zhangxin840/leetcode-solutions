var binSearch = function (nums, target, low, high) {
  var mid = (low + high) >> 1;

  if (target === nums[mid]) {
    return true;
  }

  if (low >= high) {
    return false;
  }

  if (target < nums[mid]) {
    return binSearch(nums, target, low, mid);
  } else {
    return binSearch(nums, target, mid + 1, high);
  }
};
