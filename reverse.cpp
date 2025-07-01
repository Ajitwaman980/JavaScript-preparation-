#include <iostream>
#include <string>
#include <vector>
using namespace std;

void reverse(vector<char>& s) {
    int left = 0, right = s.size() - 1;
    while (left < right) {
        swap(s[left], s[right]); 
        left++;
        right--;
    }


    cout << "[";
    for (int i = 0; i < s.size(); i++) {
        cout << "\"" << s[i] << "\"";
        if (i != s.size() - 1) cout << ", ";
    }
    cout << "]" << endl;
}

int main() {
    vector<char> arr = {'h', 'e', 'l', 'l', 'o'};
    reverse(arr);
    return 0;
}
