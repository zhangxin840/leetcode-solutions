// https://www.interviewbit.com/problems/rotated-array/
public class Solution {
	// DO NOT MODIFY THE LIST
	public int findMin(final List<Integer> a) {
	    return binSearch(a, 0, a.size() - 1);
	}

	public int binSearch(final List<Integer> a, int l, int r) {
	    int mid = (l + r) / 2;
	    int result = 0;

	    if (mid >= 1 && a.get(mid) < a.get(mid - 1)) result = a.get(mid);
	    else if (l >= r) result = a.get(0);
	    else if (a.get(mid) > a.get(r)) result =  binSearch(a, mid + 1, r);
	    else if (a.get(mid) < a.get(r)) result = binSearch(a, l, mid);

	    return result;
	}
}
