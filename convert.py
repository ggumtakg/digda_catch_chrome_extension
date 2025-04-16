import cv2

img = cv2.imread('images/digda.png')

cv2.imwrite('images/16.png', cv2.resize(img, (16, 16)))
cv2.imwrite('images/32.png', cv2.resize(img, (32, 32)))
cv2.imwrite('images/48.png', cv2.resize(img, (48, 48)))
cv2.imwrite('images/128.png', cv2.resize(img, (128, 128)))