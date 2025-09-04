//Truthy vs Falsy values in JavaScript

// In JavaScript, values can be classified as either "truthy" or "falsy" 
// based on how they evaluate in a boolean context.


// Falsy values are values that evaluate to false when converted to a boolean.
// The following values are considered falsy in JavaScript:
// 1. false
// 2. 0 (zero)
// 3. -0 (negative zero)
// 4. 0n (BigInt zero)
// 5. "" (empty string)
// 6. null
// 7. undefined
// 8. NaN (Not a Number)

// Everything else is considered truthy, including:
// 1. true
// 2. Any non-zero number (e.g., 1, -1, 3.14)
// 3. Any non-empty string (e.g., "hello", "0", "false")
// 4. Objects (e.g., {}, [])
// 5. Functions
// 6. Symbols
// 7. BigInt (non-zero) 
// 8. Any other value not listed as falsy