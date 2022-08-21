# @param {Integer[][]} image
# @param {Integer} sr
# @param {Integer} sc
# @param {Integer} color
# @return {Integer[][]}
def flood_fill(image, sr, sc, color)
    
    original_color = image[sr][sc]
    
    return image if original_color == color
    
    fill(image, sr, sc, original_color, color) 
    
    image
end


def fill(image, sr, sc, old_color, new_color)
    return unless sr.between?(0, image.length - 1) && sc.between?(0, image[0].length - 1) && image[sr][sc] == old_color
    
    image[sr][sc] = new_color
    fill(image, sr + 1, sc, old_color, new_color)   
    fill(image, sr - 1, sc, old_color, new_color)   
    fill(image, sr, sc + 1, old_color, new_color)   
    fill(image, sr, sc - 1, old_color, new_color)   
end