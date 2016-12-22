// Prints a maximum set of activities that can be done by a single
// person, one at a time.
//  n   -->  Total number of activities
//  s[] -->  An array that contains start time of all activities
//  f[] -->  An array that contains finish time of all activities ( sorted )
void printMaxActivities(int s[], int f[], int n)
{
   int i, j;

   printf ("Following activities are selected \n");

   // The first activity always gets selected
   i = 0;
   printf("%d ", i);

   // Consider rest of the activities
   for (j = 1; j < n; j++)
   {
     // If this activity has start time greater than or equal to the finish
     // time of previously selected activity, then select it
     if (s[j] >= f[i])
     {
     printf ("%d ", j);
     i = j;
     }
   }
}
