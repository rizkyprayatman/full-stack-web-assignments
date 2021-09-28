# Program Termometer

## Declaration

```
var n : number;
var T : "string";
var result
```

## Implementation

```
START
INPUT n
INPUT T

if T = "Fahrenheit" then
    result = (n - 32)*(5/9)
else if T = "Kelvin" then
    result = n - 273.15
else
    result = n
end if

END
```
