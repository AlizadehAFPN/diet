#import "MyTextInputView.h"
#import <React/RCTBridge.h>
#import <React/RCTUIManager.h>
#import <React/RCTViewManager.h>
#import <React/RCTLog.h>

@implementation MyTextInputView

RCT_EXPORT_MODULE()

- (UIView *)view
{
    UITextField *textField = [[UITextField alloc] init];
    textField.placeholder = @"Enter text";
    [textField addTarget:self action:@selector(textFieldDidChange:) forControlEvents:UIControlEventEditingChanged];
    return textField;
}

- (void)textFieldDidChange:(UITextField *)textField
{
    if (textField.text.length > 0) {
        [self.bridge.eventDispatcher sendAppEventWithName:@"onTextInputChange"
                                                     body:@{@"text": textField.text}];
    }
}

RCT_EXPORT_VIEW_PROPERTY(placeholder, NSString)
RCT_EXPORT_VIEW_PROPERTY(text, NSString)
RCT_EXPORT_VIEW_PROPERTY(autoFocus, BOOL)

@end
