# Testing Guide for Bean and Nothingness Website

This document provides comprehensive testing instructions to ensure the website is accessible and functional for all users.

## Keyboard Navigation Testing

### Navigation Menu
1. Press `Tab` to move through navigation items
2. Press `Enter` or `Space` to activate menu items
3. Verify skip link appears at the top when focused (press `Tab` first on page load)
4. Test that navbar toggle button works with `Enter` and `Space` keys
5. Ensure focus is visible on all navigation elements

### Social Sharing Buttons
1. Navigate to a blog post with social sharing buttons
2. Press `Tab` to focus on each share button
3. Press `Enter` or `Space` to activate sharing
4. Verify focus indicator is clearly visible
5. Test that each platform's share dialog opens correctly

### Links and Buttons
1. Tab through all interactive elements on each page
2. Verify visible focus indicators on:
   - Navigation links
   - Social media links
   - External links (Steam, social platforms)
   - Email links
3. Press `Enter` to activate links
4. Check that focus order is logical and follows visual layout

## Screen Reader Testing

### Recommended Tools
- **Windows**: NVDA (free) or JAWS
- **macOS**: VoiceOver (built-in)
- **Linux**: Orca
- **Mobile**: TalkBack (Android), VoiceOver (iOS)

### Test Checklist
1. **Page Structure**
   - Verify page title is announced
   - Check that heading hierarchy is logical (H1 → H2 → H3)
   - Confirm skip link is announced first
   - Verify main landmarks are announced (navigation, main, footer)

2. **Images**
   - All images should have meaningful alt text
   - Decorative icons should be hidden (aria-hidden="true")
   - Verify game screenshots have descriptive alt text

3. **Navigation**
   - Navigation landmark should be announced
   - Menu items should be clear and descriptive
   - Mobile menu toggle should announce its state

4. **Social Sharing**
   - Share buttons should announce "Share [Page Title] on [Platform]"
   - Icons should not be announced separately
   - External link warning should be announced

5. **Forms** (if implemented)
   - Form labels should be associated with inputs
   - Required fields should be announced
   - Error messages should be announced immediately
   - Success messages should be announced
   - Loading states should be announced

## Form Testing (When Implemented)

### Basic Functionality
1. **Submit with keyboard only**
   - Tab to each field
   - Enter data
   - Tab to submit button
   - Press `Enter` to submit

2. **Validation Testing**
   - Submit empty form - verify error messages
   - Enter invalid email - verify error message
   - Enter valid data - verify success message

3. **Error States**
   - Check that errors are announced to screen readers
   - Verify visual error indicators are clear
   - Test that focus moves to error message
   - Ensure form can be resubmitted after error

4. **Success States**
   - Verify success message is announced
   - Check that message is visually clear
   - Test that form resets or provides next steps

5. **Loading States**
   - Verify loading indicator appears
   - Check that form is disabled during submission
   - Test that double-submission is prevented
   - Verify loading state is announced to screen readers

### Slow Connection Testing
1. Use browser DevTools to throttle network to "Slow 3G"
2. Submit form
3. Verify loading indicator appears and persists
4. Check that timeout error is handled gracefully
5. Test retry functionality

## Mobile Testing

### Touch Device Testing
1. **Navigation**
   - Tap hamburger menu icon (should be at least 44x44px)
   - Verify menu opens smoothly
   - Test closing menu
   - Check spacing between menu items prevents mis-taps

2. **Social Buttons**
   - Verify buttons are at least 44x44px on mobile
   - Test tapping each button
   - Check spacing prevents accidental taps
   - Verify share dialogs work in mobile browsers

3. **Forms** (if implemented)
   - Test appropriate input types (email keyboard for email field)
   - Verify touch targets are large enough
   - Check that zoom doesn't break layout
   - Test submit button is easy to reach with thumb

### Responsive Design
Test on various screen sizes:
- Mobile: 320px - 480px width
- Tablet: 768px - 1024px width
- Desktop: 1200px+ width

Verify:
- All content is readable
- No horizontal scrolling
- Images scale appropriately
- Touch targets remain adequate size

## Cross-Browser Testing

Test on the following browsers (latest versions):
- Chrome/Chromium
- Firefox
- Safari (macOS/iOS)
- Edge
- Mobile browsers (Safari iOS, Chrome Android)

### Test Checklist
- [ ] Navigation works correctly
- [ ] Skip link appears on focus
- [ ] Focus indicators are visible
- [ ] Images load with correct alt text
- [ ] Social sharing buttons function
- [ ] YouTube video loads and plays
- [ ] Layout is responsive
- [ ] No JavaScript errors in console

## Automated Testing Tools

### Browser Extensions
1. **WAVE (Web Accessibility Evaluation Tool)**
   - Install browser extension
   - Run on each page
   - Review errors and warnings
   - Fix critical issues

2. **axe DevTools**
   - Install browser extension
   - Run accessibility scan
   - Review reported issues
   - Verify fixes

3. **Lighthouse (Chrome DevTools)**
   - Open DevTools (F12)
   - Go to Lighthouse tab
   - Run accessibility audit
   - Target score: 90+

### HTML Validation
1. Visit [W3C Validator](https://validator.w3.org/)
2. Enter site URL or upload HTML
3. Fix any errors or warnings

### Color Contrast
Use tools to verify WCAG AA compliance:
- [WebAIM Contrast Checker](https://webaim.org/resources/contrastchecker/)
- [Colour Contrast Analyser](https://www.tpgi.com/color-contrast-checker/)

Required contrast ratios:
- Normal text: 4.5:1
- Large text (18pt+ or 14pt+ bold): 3:1
- UI components and graphics: 3:1

## Performance Testing

### Network Throttling
1. Open browser DevTools
2. Go to Network tab
3. Set throttling to "Slow 3G" or "Fast 3G"
4. Test page load and form submission
5. Verify experience remains acceptable

### Load Testing
- Check page load time (target: under 3 seconds)
- Verify images are optimized
- Test with slow connection
- Check JavaScript performance

## Privacy and Security

### Privacy Testing
1. Verify privacy notice is visible on forms
2. Check that data collection is transparent
3. Confirm HTTPS is used for all connections
4. Test that no sensitive data is logged to console

### Security Testing
1. Check for mixed content warnings
2. Verify external links use rel="noopener noreferrer"
3. Test AJAX error handling doesn't leak sensitive data
4. Confirm no credentials are exposed in code

## Regression Testing

After any code changes:
1. Re-run automated accessibility scans
2. Test keyboard navigation on affected pages
3. Verify focus indicators still work
4. Check that ARIA attributes are correct
5. Test on mobile devices
6. Validate HTML

## Reporting Issues

If you find accessibility issues:
1. Document the issue clearly
2. Include steps to reproduce
3. Note browser and assistive technology used
4. Take screenshots if applicable
5. Report to: info@beanandnothingness.com

## Accessibility Goals

Target metrics:
- **Lighthouse Accessibility Score**: 90+
- **WCAG Level**: AA compliance
- **Keyboard Navigation**: 100% functional
- **Screen Reader**: All content accessible
- **Mobile**: All features work on touch devices
- **Cross-Browser**: Works on all major browsers

## Testing Schedule

Recommended testing frequency:
- **Before deployment**: Full accessibility audit
- **After major changes**: Regression testing
- **Monthly**: Quick accessibility check
- **Quarterly**: Comprehensive testing with assistive technologies
- **Annually**: Full WCAG AA compliance audit
