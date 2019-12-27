package com.sp;

public class Main {

    public static void main(String[] args) {
	// write your code here
        int a[] = new int[]{1, 3, 5, 6, 8};
        int result[] = sumToFind(a,11);
        for (int i = 0 ; i < result.length ; i++){
            System.out.println(result[i] + " ");
        }
    }

    public static int[] sumToFind(int a[], int sum){

        if (a.length == 0 || a == null){
            return null;
        }
        int i,j;
        i = 0;
        j = a.length - 1;
        while(i < j){
            if(a[i] + a[j] == sum)
                return new int[]{i,j};
            else if (a[i] + a[j] < sum){
                i++;
            }
            else{
                j--;
            }
        }
        return new int[0];
    }
}
