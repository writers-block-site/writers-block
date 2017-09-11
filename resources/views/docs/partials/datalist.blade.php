<?php

$genres = ['Auto-Biography', 'Biography', 'Essay', 'Journal', 'Memoir', 'Novel', 'Poem','Script', 'Short Story', 'Song', 'Speech', 'Thesis', ]

?>
<datalist id="genres">
    @foreach ($genres as $genre)
        <option value="{{$genre}}">
    @endforeach
</datalist>
