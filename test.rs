fn main() {
    // Serialize the data structure to the Writer
    let mut writer = Vec::new();
    bincode::serialize_into(&mut writer, &data).unwrap();
    println!("{:?}", writer);
}