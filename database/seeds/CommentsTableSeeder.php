<?php

use Illuminate\Database\Seeder;
use App\Models\Comments;
use App\User;
use App\Models\Docs;
class CommentsTableSeeder extends Seeder
{
    /**
     * Run the database seeds.
     *
     * @return void
     */
    public function run()
    {
        $comments = [
                "You really need to check your grammar throughout",
                "Too many fragments",
                "Not all poetry needs to rhyme. Focus less on that and more on structure",
                "The resume seems to be bloated with content, trim it down",
                "Gold Star scholarly work",
                "I would buy all the copies of this novel",
                "I think you need to cite your sources better try mla formating",
                "Your english teacher is going to be impressed",
                "Have more confidence in your stories",
                "there seems to be a lack in character development",
                "How'd did you come up with this setting. It's so imaginative",
                "Your poem brought me to tears"

        ];

        for ($i=0; $i <=999 ; $i++) {
            $comment1 = array_rand($comments);
            $comment1 = $comments[$comment1];
            $comment = new Comments();
            $comment->uploaded_by= User::all()->random()->id;
            $comment->doc_id = Docs::all()->random()->id;
            $comment->comment = $comment1;
            $comment->save();
        }
    }
}
