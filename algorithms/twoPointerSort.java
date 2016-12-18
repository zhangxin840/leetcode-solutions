public class Solution {
    public void sortColors(ArrayList<Integer> a) {
        int i = 0;
        int l = 0;
        int r = a.size() - 1;
        int temp = 0;
        int val = 0;

          while (i <= r) {
              if (a.get(i) == 0) {
                  temp = a.get(l);
                  a.set(l, a.get(i));
                  a.set(i, temp);
                  l++;

                  i++;
              } else if (a.get(i) == 2) {
                  temp = a.get(r);
                  a.set(r, a.get(i));
                  a.set(i, temp);
                  r--;
              } else {
                  i++;
              }
          }
    }
}
