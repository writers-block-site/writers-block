<?php

use Illuminate\Database\Seeder;
use App\Models\Docs;
use App\User;
class DocsTableSeeder extends Seeder
{
    /**
     * Run the database seeds.
     *
     * @return void
     */
    public function run()
    {
        $faker = Faker\Factory::create();

        $handles = ["xZOhcteRRGCtcTT0ss7B","jyECfHHIROqljAl2cBVX","1sW6dohcQyW80CSETuwe","0xKH6X1vSv6aIvmMzFHa"];
        $titles  =  ["Help my poem isn't rhyming!","Is this worth publishing?","Is my resume too long?","Can I get some feedback on my short story?","My english teacher is strict","#CRY need help!","Need help proof reading"];
        $genres = ["Non-Fiction","Poem","Short Story","Script","Essay","Memoir","Biography","Auto-Biography","Novel","Thesis","Speech"];

        for ($i=0; $i <=99 ; $i++) {
            $handle1 = array_rand($handles);
            $handle2 = array_rand($handles);
            $handle3 = array_rand($handles);
            $handle1 = $handles[$handle1];
            $handle2 = $handles[$handle2];
            $handle3 = $handles[$handle3];
            $title = $titles[array_rand($titles)];
            $genre = $genres[array_rand($genres)];
            $post = new Docs();
            $post->uploaded_by = User::all()->random()->id;
            $post->title = $title;
            $post->genre = $genre;
            $post->handles = $handle1 . "," .$handle2 . "," . $handle3;
            $post->view_count = mt_rand(1,100);
            $post->save();
        }
    }
}
