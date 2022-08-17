def is_valid(s)
  bracket_paris = { ')' => '(', '}' => '{', ']' => '[' }

  open_bracket = ['(', '{', '[']
  keep_track_open = []

  s.each_char do |c|
    if open_bracket.include?(c)
      keep_track_open.push(c)
    elsif bracket_paris.keys.include?(c)
        if bracket_paris[c] == keep_track_open[-1]
            keep_track_open.pop
        else
            return false
        end
    end
  end

  keep_track_open.empty?

end
