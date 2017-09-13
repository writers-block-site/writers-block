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

        for ($i=0; $i <=100 ; $i++) {
            $handle1 = array_rand($handles);
            $handle2 = array_rand($handles);
            $handle3 = array_rand($handles);
            $handle1 = $handles[$handle1];
            $handle2 = $handles[$handle2];
            $handle3 = $handles[$handle3];
            $post = new Docs();
            $post->uploaded_by = User::all()->random()->id;
            $post->title = $faker->catchPhrase;
            $post->genre = $faker->catchPhrase;
            $post->handles = $handle1 . "," .$handle2 . "," . $handle3;
            $post->view_count = mt_rand(1,100);
            $post->save();
        }
    }
}
