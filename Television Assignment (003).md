Television Assignment




Solution:  I have written the code in JAVA and remove the questionaries’ comments. PFB.

/*******************************************************************************************************/

import java.util.ArrayList;
import java.util.List;
import java.util.Map;
import java.util.TreeMap;

public class Television {
	private static int channelCounter;
	private static Map<String, String> channels;
	private static List<String> channelKeys;

	public Map<String, String> getChannelNumberToNameMap() {
		return channels;
	}

	public void setChannelNumberToNameMap(
			Map<String, String> channelNumberToNameMap) {
		Television.channels = channelNumberToNameMap;
	}
      // Constructor to populate data
	public Television(Map<String, String> channelNumberToNameMap) {
		this.setChannelNumberToNameMap(channelNumberToNameMap);
	}

	public String goToChannel(String channelNumber) {
		if (channelKeys.contains(channelNumber)) {
			channelCounter = channelKeys.indexOf(channelNumber);
			return channels.get(channelNumber);
		} else {
			channelCounter = -1;
			return "Invalid channel number!";
		}
	}

	public String channelUp() {
		if (channelCounter != -1 && channelCounter < channels.size() - 1) {
			channelCounter++;
			return channels.get(channelKeys.get(channelCounter));
		} else {
			return "No channel Found.";
		}
	}

	public String channelDown() {
		if (channelCounter != -1 && channelCounter > 0) {
			channelCounter--;
			return channels.get(channelKeys.get(channelCounter));
		} else {
			return "No channel Found.";
		}
	}

	public static void main(String[] argv) {
		channels = new TreeMap<>();
		channels.put("101", "Star Sports");
		channels.put("105", "Pogo");
		channels.put("109", "Star Movies");
		channels.put("104", "Discovery");
		Television tele = new Television(channels);
		channelKeys = new ArrayList<>(channels.keySet());

		System.out.println("Channel : " + tele.goToChannel("101"));
		System.out.println("Channel : " + tele.channelUp());
		System.out.println("Channel : " + tele.channelDown());
		System.out.println("Channel : " + tele.channelUp());
		System.out.println("Channel : " + tele.channelUp());

	}

}
/*** Hoping this solution for television is optimal because there is no looping has been used and only required and function 
 * functions and variable have been used, also used few validation if user giving channel number which is not available in list
 * will return 'No channel Found' */

/***Note:  There are main method which written for testing purpose which have some hard code data for channels
 *  and keeping it here */ 

/********************************************Thank You*************************************************/


/**
 * Goal: Implement the constructor and methods below.
 *
 * Guidelines:
 * 1. Use any programming language you like. If you switch away from Java, please rewrite the code below in your
 *    desired language. Please use actual code (no pseudocode).
 * 2. Feel free to add any additional private member methods/variables/classes.
 * 3. Please capture any assumptions that you make about the program.
 *
 * Question:
 * Is your solution optimal? If so, why?
 */

/**
 * Class to Model a Television.
 */
public class Television {

/**
* Constructor
*
* @param channelNumberToNameMap A map of every channel number and its corresponding channel name
*
* NOTE: It is safe to assume that the channelNumberToNameMap's keys will all be numeric and positive
*       and the values will be non-null/whitespace. In addition, channelNumberToNameMap will not be empty.
*       Do not make any other assumptions about channelNumberToNameMap or the data it contains.
*/
public Television(Map<String, String> channelNumberToNameMap) {
// TODO
}

/**
* Changes the Television to the desired channel.
*
* @param channelNumber The desired channel number
* @return
The name of the desired channel
*/
public String goToChannel(String channelNumber) {
// TODO
}
/**
* Changes the Television channel once in an ascending direction.
*
* @return
The name of the next channel
*/
public String channelUp() {
// TODO
}
/**
* Changes the Television channel once in a descending direction.
*
* @return
The name of the previous channel
*/
public String channelDown() {
// TODO
}
}
