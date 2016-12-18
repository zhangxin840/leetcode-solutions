int isPalindrome(char* A)
{
  int i=0,j=strlen(A);

  while(i < j)
  {
    while(i < j && !isalnum(A[i])) i++;
    while(i < j && !isalnum(A[j])) j--;
    if (toupper(A[i]) != toupper(A[j])) return 0;
    i++;
    j--;
  }
  return 1;
}
