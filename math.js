var HybridRand = function(length, prifix, suffix){
    if(isNaN(length)) length = 6;
    prifix = prifix || '';
    suffix = suffix || '';
    return ( prifix + Math.random().toString(35).substr(2, length) + suffix );
};
