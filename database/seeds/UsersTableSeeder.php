<?php

use Illuminate\Database\Seeder;
use App\User;

class UsersTableSeeder extends Seeder
{
    /**
     * Run the database seeds.
     *
     * @return void
     */
    public function run()
    {
        $faker = Faker\Factory::create();

        for ($i=0; $i <= 50 ; $i++) {
            $user = new User();
        	$user->name = $faker->userName;
        	$user->password = $faker->password;
        	$user->email = $faker->unique()->safeEmail;
        	$user->save();
        }
    }
}
