def ladder_length(begin_word, end_word, word_list)
  step = 0
  word_set = Set.new(word_list)
    
  return step unless word_set.member?(end_word)

  word_neigh = Hash.new { |h, k| h[k] = [] }
  word_set.add(begin_word)
  n = begin_word.length

  word_set.each do |word|
    n.times do |i|
      pattern = word[0, i] + '*' + word[i + 1..]
      word_neigh[pattern].push(word) unless word == begin_word
    end
  end

  visit = Set[]
  queue = [begin_word]

  until queue.empty?
    step += 1
    queue.length.times do |_|
      word = queue.shift
      return step if word == end_word

      word_len = word.length

      word_len.times do |i|
        pattern = word[0, i] + '*' + word[i + 1..]
        word_neigh[pattern].each do |neigh_word|
          unless visit.member?(neigh_word)
            queue.push(neigh_word)
            visit.add(neigh_word)
          end
        end
      end
    end
  end
  0
end
