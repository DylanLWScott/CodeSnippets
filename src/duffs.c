//Please notice that the MIT license applies to my code below.  The other links or sites that are provided 
//may have their own licenses.

//http://www.opensource.org/licenses/mit-license.php

#include <stdio.h>
#include <string.h>

int duffs(char *from, char *to, int count) {
	int register n = (count + 7) / 8;      /* count > 0 assumed */

	switch (count % 8)
	{
		case 0:   do {    *to++ = *from++;
		case 7:           *to++ = *from++;
		case 6:           *to++ = *from++;
		case 5:           *to++ = *from++;
		case 4:           *to++ = *from++;
		case 3:           *to++ = *from++;
		case 2:           *to++ = *from++;
		case 1:           *to++ = *from++;
					} while (--n > 0);
	}

}

int main(int argc, char *argv[]) {
  char from[1000] = {'a'};
  char to[1000] = {'c'};
  int rc = 0; 
  memset(from, 'x', 1000); 
  memset(to, 'y', 1000); 
  rc = duffs(from, to, 1000); 
  return rc;
}
