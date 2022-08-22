# @param {String} ransom_note
# @param {String} magazine
# @return {Boolean}
def can_construct(ransom_note, magazine)
   mag_chars_count = count_char(magazine)
    
   ransom_note.each_char do |char|
       mag_chars_count[char] -= 1
       return false if mag_chars_count[char] < 0
   end
    
   true
end


def count_char(str)
    count = Hash.new(0)
    str.each_char do |char|
        count[char] += 1
    end
    count
end