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
        $faker = Faker\Factory::create();

        for ($i=0; $i <=999 ; $i++) {
            $comment = new Comments();
            $comment->uploaded_by= User::all()->random()->id;
            $comment->doc_id = Docs::all()->random()->id;
            $comment->comment = $faker->bs;
            $comment->save();
        }
    }
}
