js_library
==========

Easy to import and use.

### Document
#### date.js
* fromDateToTimestamp("2012/12/31")

        1356933600
* fromTimestampToDate("1356933600")

        2012/12/31
* daysInMonth("2013,2")

        28

#### convert.js
* asc2str(65)

        A
* urlDecode("type%3Dvideo")

        type=video

#### patchZero.js
* patchZero(99, 4)

        0099

#### math.js
* hybridRand(7,"u","+$")
                
        u72fbanu+$

#### array.js
* isInArray(2, [1,2,5])

        true
        
* unique([1,1,3,3,5,6,6,6])

        [1, 3, 5, 6]
        
* duplicate([1,1,3,3,5,6,6,6,7])

        [1, 3, 6]

* arr2lse(['dog','cat'], ['meat','fish']);

        localStorage:
        [key]    [value]
         dog      meat
         cat      fish
