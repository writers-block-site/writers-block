<?php

$genres = ['Fiction','Comedy','Drama','Satire','Romantic','Non-fiction','Horror']

?>
<datalist id="genre">
    @foreach ($genres as $genre)
        <option value="{{$genre}}">
    @endforeach
</datalist>
