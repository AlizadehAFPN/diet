// package com.dietdoctor;

// import android.content.Context;
// import android.graphics.Color;
// import android.graphics.Typeface;
// import android.text.InputType;
// import android.util.TypedValue;
// import android.view.Gravity;
// import android.view.ViewGroup.LayoutParams;
// import android.widget.EditText;
// import android.widget.LinearLayout;
// import android.widget.TextView;

// import com.facebook.react.uimanager.ThemedReactContext;

// public class MyTextInputView extends LinearLayout {
//     private EditText editText;

//     public MyTextInputView(ThemedReactContext context) {
//         super(context);

//         // Create a vertical LinearLayout to hold the EditText and TextView
//         setOrientation(LinearLayout.VERTICAL);
//         setLayoutParams(new LayoutParams(LayoutParams.MATCH_PARENT, LayoutParams.WRAP_CONTENT));
        
//         // Create and customize the EditText
//         editText = new EditText(context);
//         editText.setLayoutParams(new LayoutParams(LayoutParams.MATCH_PARENT, LayoutParams.WRAP_CONTENT));
//         editText.setHint("Enter text..."); // Hint text
//         editText.setTextColor(Color.BLACK); // Text color
//         editText.setBackgroundColor(Color.WHITE); // Background color
//         editText.setInputType(InputType.TYPE_CLASS_TEXT); // Text input type
//         editText.setTextSize(TypedValue.COMPLEX_UNIT_SP, 16); // Text size
//         editText.setPadding(16, 16, 16, 16); // Padding

//         // Add the EditText to the LinearLayout
//         addView(editText);

//         // Create and customize a TextView (optional)
//         TextView textView = new TextView(context);
//         textView.setLayoutParams(new LayoutParams(LayoutParams.MATCH_PARENT, LayoutParams.WRAP_CONTENT));
//         textView.setText("Optional description"); // Optional description
//         textView.setTextColor(Color.GRAY); // Text color
//         textView.setTextSize(TypedValue.COMPLEX_UNIT_SP, 12); // Text size
//         textView.setTypeface(null, Typeface.ITALIC); // Text style
//         textView.setGravity(Gravity.END); // Text alignment
//         textView.setPadding(16, 0, 16, 8); // Padding

//         // Add the TextView to the LinearLayout (optional)
//         addView(textView);
//     }

//     // Add additional methods and properties here as needed
//     // For example, you can create methods to get or set the text value of the EditText.

//     public String getText() {
//         return editText.getText().toString();
//     }

//     public void setText(String text) {
//         editText.setText(text);
//     }
// }
