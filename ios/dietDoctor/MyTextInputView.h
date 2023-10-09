#import <React/RCTViewManager.h>

@interface MyTextInputView : RCTViewManager

@property (nonatomic, copy) NSString *placeholder;
@property (nonatomic, copy) NSString *text;
@property (nonatomic, assign) BOOL autoFocus;

@end
