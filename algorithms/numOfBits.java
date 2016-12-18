public class Solution {
	public int numSetBits(long a) {
	    int result = 0;
	    while (a > 0) {
	        if ((a & 1) == 1) result ++;
	        a = a >> 1;
	    }

	    return result;
	}
}
