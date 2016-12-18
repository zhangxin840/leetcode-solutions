// https://www.interviewbit.com/problems/binary-representation/

var findDigitsInBinary = function(A){
    var bits = [];
    if (!A) return '0';

    while (A) {
        bits.unshift(A % 2);
        A = A >> 1;
    }

    return bits.join('');
};
